import EternalOdysseySwedenServerKeywordPage, { generateMetadata } from './eternal-odyssey-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseySwedenServerKeywordPage />;
}
