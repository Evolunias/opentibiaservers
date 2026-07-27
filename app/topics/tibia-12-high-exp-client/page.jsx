import Tibia12HighExpClientKeywordPage, { generateMetadata } from './tibia-12-high-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12HighExpClientKeywordPage />;
}
