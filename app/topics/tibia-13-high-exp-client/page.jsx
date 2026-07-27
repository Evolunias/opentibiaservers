import Tibia13HighExpClientKeywordPage, { generateMetadata } from './tibia-13-high-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13HighExpClientKeywordPage />;
}
