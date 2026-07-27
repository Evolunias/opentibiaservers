import MistOfDeathRealMapKeywordPage, { generateMetadata } from './mist-of-death-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathRealMapKeywordPage />;
}
