import PvpeRegisterEuropeKeywordPage, { generateMetadata } from './pvpe-register-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRegisterEuropeKeywordPage />;
}
