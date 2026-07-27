import CurrentClassicusOtServerKeywordPage, { generateMetadata } from './current-classicus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusOtServerKeywordPage />;
}
