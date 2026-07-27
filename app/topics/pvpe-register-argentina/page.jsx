import PvpeRegisterArgentinaKeywordPage, { generateMetadata } from './pvpe-register-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRegisterArgentinaKeywordPage />;
}
