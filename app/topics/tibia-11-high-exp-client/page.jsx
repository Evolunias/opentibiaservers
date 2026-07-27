import Tibia11HighExpClientKeywordPage, { generateMetadata } from './tibia-11-high-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11HighExpClientKeywordPage />;
}
