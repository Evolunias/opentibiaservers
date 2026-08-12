import OtpokemonComServerReviewPage, { generateMetadata } from './otpokemon-com';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtpokemonComServerReviewPage />;
}
