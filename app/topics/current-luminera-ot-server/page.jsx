import CurrentLumineraOtServerKeywordPage, { generateMetadata } from './current-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraOtServerKeywordPage />;
}
