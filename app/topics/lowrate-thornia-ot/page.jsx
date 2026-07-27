import LowrateThorniaOtKeywordPage, { generateMetadata } from './lowrate-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaOtKeywordPage />;
}
