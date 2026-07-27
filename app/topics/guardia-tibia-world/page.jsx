import GuardiaTibiaWorldKeywordPage, { generateMetadata } from './guardia-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaTibiaWorldKeywordPage />;
}
