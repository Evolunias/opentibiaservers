import GuardiaTibiaKeywordPage, { generateMetadata } from './guardia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaTibiaKeywordPage />;
}
