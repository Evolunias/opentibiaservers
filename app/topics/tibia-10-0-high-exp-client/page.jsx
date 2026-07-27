import Tibia100HighExpClientKeywordPage, { generateMetadata } from './tibia-10-0-high-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100HighExpClientKeywordPage />;
}
