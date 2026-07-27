import Tibia81HighExpKeywordPage, { generateMetadata } from './tibia-8-1-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81HighExpKeywordPage />;
}
