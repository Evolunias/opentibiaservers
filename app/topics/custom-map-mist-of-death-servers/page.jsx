import CustomMapMistOfDeathServersKeywordPage, { generateMetadata } from './custom-map-mist-of-death-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMistOfDeathServersKeywordPage />;
}
