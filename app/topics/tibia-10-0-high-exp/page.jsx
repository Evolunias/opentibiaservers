import Tibia100HighExpKeywordPage, { generateMetadata } from './tibia-10-0-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100HighExpKeywordPage />;
}
