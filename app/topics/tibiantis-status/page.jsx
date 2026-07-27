import TibiantisStatusKeywordPage, { generateMetadata } from './tibiantis-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisStatusKeywordPage />;
}
