import ActiveThorniaOtKeywordPage, { generateMetadata } from './active-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaOtKeywordPage />;
}
