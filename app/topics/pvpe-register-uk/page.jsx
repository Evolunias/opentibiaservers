import PvpeRegisterUkKeywordPage, { generateMetadata } from './pvpe-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRegisterUkKeywordPage />;
}
