import TopThorniaOtServerKeywordPage, { generateMetadata } from './top-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaOtServerKeywordPage />;
}
