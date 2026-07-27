import EternalOdysseyMapKeywordPage, { generateMetadata } from './eternal-odyssey-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyMapKeywordPage />;
}
