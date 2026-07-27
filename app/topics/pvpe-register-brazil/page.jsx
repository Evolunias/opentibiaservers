import PvpeRegisterBrazilKeywordPage, { generateMetadata } from './pvpe-register-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRegisterBrazilKeywordPage />;
}
