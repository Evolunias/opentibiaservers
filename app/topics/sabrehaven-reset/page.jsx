import SabrehavenResetKeywordPage, { generateMetadata } from './sabrehaven-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenResetKeywordPage />;
}
