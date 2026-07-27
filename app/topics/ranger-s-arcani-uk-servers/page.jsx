import RangerSArcaniUkServersKeywordPage, { generateMetadata } from './ranger-s-arcani-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniUkServersKeywordPage />;
}
