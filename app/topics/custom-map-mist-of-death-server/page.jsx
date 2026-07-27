import CustomMapMistOfDeathServerKeywordPage, { generateMetadata } from './custom-map-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMistOfDeathServerKeywordPage />;
}
