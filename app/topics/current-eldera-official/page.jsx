import CurrentElderaOfficialKeywordPage, { generateMetadata } from './current-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaOfficialKeywordPage />;
}
