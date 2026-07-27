import TopThorniaOtKeywordPage, { generateMetadata } from './top-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaOtKeywordPage />;
}
