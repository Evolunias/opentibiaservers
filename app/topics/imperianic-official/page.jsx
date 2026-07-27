import ImperianicOfficialKeywordPage, { generateMetadata } from './imperianic-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicOfficialKeywordPage />;
}
