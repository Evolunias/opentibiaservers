import AureraGlobalStatusKeywordPage, { generateMetadata } from './aurera-global-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalStatusKeywordPage />;
}
