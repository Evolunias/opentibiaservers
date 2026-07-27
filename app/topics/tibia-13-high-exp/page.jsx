import Tibia13HighExpKeywordPage, { generateMetadata } from './tibia-13-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13HighExpKeywordPage />;
}
