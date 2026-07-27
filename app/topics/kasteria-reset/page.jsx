import KasteriaResetKeywordPage, { generateMetadata } from './kasteria-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaResetKeywordPage />;
}
