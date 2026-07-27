import Tibia80HighExpClientKeywordPage, { generateMetadata } from './tibia-8-0-high-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80HighExpClientKeywordPage />;
}
