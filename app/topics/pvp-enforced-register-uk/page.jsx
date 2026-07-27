import PvpEnforcedRegisterUkKeywordPage, { generateMetadata } from './pvp-enforced-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedRegisterUkKeywordPage />;
}
