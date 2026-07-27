import ImperianicGermanyServerKeywordPage, { generateMetadata } from './imperianic-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicGermanyServerKeywordPage />;
}
