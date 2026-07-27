import PvpEnforcedRegisterUsaKeywordPage, { generateMetadata } from './pvp-enforced-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedRegisterUsaKeywordPage />;
}
