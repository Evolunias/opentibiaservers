import NoResetEvoluniaTibiaKeywordPage, { generateMetadata } from './no-reset-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoluniaTibiaKeywordPage />;
}
