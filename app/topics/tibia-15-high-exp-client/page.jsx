import Tibia15HighExpClientKeywordPage, { generateMetadata } from './tibia-15-high-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15HighExpClientKeywordPage />;
}
