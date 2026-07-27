import PvpEnforcedRegisterCanadaKeywordPage, { generateMetadata } from './pvp-enforced-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedRegisterCanadaKeywordPage />;
}
