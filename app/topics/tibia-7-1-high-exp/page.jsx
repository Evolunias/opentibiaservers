import Tibia71HighExpKeywordPage, { generateMetadata } from './tibia-7-1-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71HighExpKeywordPage />;
}
