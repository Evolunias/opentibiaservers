import AureraGlobalResetKeywordPage, { generateMetadata } from './aurera-global-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalResetKeywordPage />;
}
