import ThaisotRetroServerPolandKeywordPage, { generateMetadata } from './thaisot-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRetroServerPolandKeywordPage />;
}
