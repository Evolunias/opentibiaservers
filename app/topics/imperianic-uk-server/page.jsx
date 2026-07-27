import ImperianicUkServerKeywordPage, { generateMetadata } from './imperianic-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicUkServerKeywordPage />;
}
