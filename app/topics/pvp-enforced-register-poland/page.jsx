import PvpEnforcedRegisterPolandKeywordPage, { generateMetadata } from './pvp-enforced-register-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedRegisterPolandKeywordPage />;
}
