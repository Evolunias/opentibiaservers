import TibiameResetKeywordPage, { generateMetadata } from './tibiame-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameResetKeywordPage />;
}
