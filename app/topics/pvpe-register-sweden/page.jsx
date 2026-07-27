import PvpeRegisterSwedenKeywordPage, { generateMetadata } from './pvpe-register-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRegisterSwedenKeywordPage />;
}
