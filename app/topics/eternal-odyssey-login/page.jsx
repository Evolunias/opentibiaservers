import EternalOdysseyLoginKeywordPage, { generateMetadata } from './eternal-odyssey-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyLoginKeywordPage />;
}
