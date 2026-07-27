import ShadowcoresFunServerKeywordPage, { generateMetadata } from './shadowcores-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresFunServerKeywordPage />;
}
