import PvpeRegisterNorthAmericaKeywordPage, { generateMetadata } from './pvpe-register-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRegisterNorthAmericaKeywordPage />;
}
