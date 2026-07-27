import SabrehavenStatusKeywordPage, { generateMetadata } from './sabrehaven-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenStatusKeywordPage />;
}
