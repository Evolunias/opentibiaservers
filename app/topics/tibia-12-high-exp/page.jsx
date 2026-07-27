import Tibia12HighExpKeywordPage, { generateMetadata } from './tibia-12-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12HighExpKeywordPage />;
}
