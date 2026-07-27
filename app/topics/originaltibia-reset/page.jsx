import OriginaltibiaResetKeywordPage, { generateMetadata } from './originaltibia-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaResetKeywordPage />;
}
