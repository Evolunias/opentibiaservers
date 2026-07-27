import TibiascapeResetKeywordPage, { generateMetadata } from './tibiascape-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeResetKeywordPage />;
}
